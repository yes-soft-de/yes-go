<?php

namespace App\Repository;

use App\Entity\CustomerEntity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method CustomerEntity|null find($id, $lockMode = null, $lockVersion = null)
 * @method CustomerEntity|null findOneBy(array $criteria, array $orderBy = null)
 * @method CustomerEntity[]    findAll()
 * @method CustomerEntity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CustomerEntityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CustomerEntity::class);
    }

    // /**
    //  * @return CustomerEntity[] Returns an array of CustomerEntity objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CustomerEntity
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function getAll()
    {
        return $this->createQueryBuilder('customer')
            ->getQuery()
            ->getResult();
    }
    public function findCustomerById($id):CustomerEntity
    {
        return $this->createQueryBuilder('customer')
            ->andWhere('customer.id = :id')
            ->setParameter('id', $id)
            ->orderBy('customer.id', 'ASC')
            ->getQuery()
            ->getOneOrNullResult()
            ;
    }
}
