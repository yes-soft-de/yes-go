<?php

namespace App\Repository;

use App\Entity\SkillEntity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method SkillEntity|null find($id, $lockMode = null, $lockVersion = null)
 * @method SkillEntity|null findOneBy(array $criteria, array $orderBy = null)
 * @method SkillEntity[]    findAll()
 * @method SkillEntity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SkillEntityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SkillEntity::class);
    }

    // /**
    //  * @return SkillEntity[] Returns an array of SkillEntity objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SkillEntity
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
